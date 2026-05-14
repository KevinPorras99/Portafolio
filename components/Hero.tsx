import React from 'react';
import { IconGitHub, IconLinkedin } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-3xl">
        <p
          className="text-accent font-mono mb-4 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold text-light mb-3 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          Kevin Porras.
        </h1>
        <h2
          className="text-4xl md:text-6xl font-bold text-dark mb-6 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          I build things for the web.
        </h2>
        <p
          className="text-dark text-lg max-w-xl leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Full Stack Developer specializing in Laravel, React, and SQL. I craft
          scalable, efficient, and user-centered web applications.
        </p>

        <div
          className="flex items-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="mailto:kevinporras9906@gmail.com"
            className="px-8 py-3 text-accent border border-accent rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-300"
          >
            Get In Touch
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KevinPorras99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform"
              aria-label="GitHub"
            >
              <IconGitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-porras99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform"
              aria-label="LinkedIn"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
