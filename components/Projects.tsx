import React from 'react';
import type { Project } from '../types';
import { IconGitHub, IconExternalLink } from './icons';

const projectsData: Project[] = [
  {
    title: 'Registro Docente',
    description: 'Registro Docente is a web application built with Laravel 11 for managing student grades in educational institutions. It features role-based authentication, interactive dashboards, and Excel import/export functionality.',
    tags: ['Laravel 11', ' HTML', 'JavaScript', 'Blade', 'Tailwind CSS', 'MySQL', 'XAMPP', 'phpMyAdmin','Git', 'GitHub'],
    imageUrl: 'img/RegistroDocente.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/KevinPorras99/RegistroDocente',
  },
  {
    title: 'Muniticket',
    description: 'Muniticket is a web application developed with Laravel 11 for managing technical support tickets for the Municipality of San Isidro de Heredia. The repository is private.',
    tags: ['Laravel 11', ' HTML', 'JavaScript', 'Blade', 'Bootstrap', 'MySQL', 'XAMPP', 'phpMyAdmin', 'Git', 'GitHub'],
    imageUrl: 'img/Muniticket.png',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Pokedex',
    description: 'Pokédex is a web application built with React and powered by Vite, designed to provide a complete and interactive experience for exploring all existing Pokémon.',
    tags: ['Vite', 'React', 'JavaScript / JSX', 'Tailwind CSS', 'REST API', 'Git', 'GitHub'],
    imageUrl: 'img/pokedex.png',
    liveUrl: 'https://kevinporras99.github.io/pokedex-react-app/',
    repoUrl: 'https://github.com/KevinPorras99/pokedex-react-app',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-secondary rounded-lg shadow-lg overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-accent/20">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
        <p className="text-dark text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1 font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-end items-center space-x-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent transition-colors">
              <IconGitHub className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent transition-colors">
              <IconExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center">
        <span className="text-accent font-mono text-2xl mr-4">04.</span> Some Things I've Built
        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;