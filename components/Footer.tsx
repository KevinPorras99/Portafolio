import React from 'react';
import { IconGitHub, IconLinkedin } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-tertiary">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/KevinPorras99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform inline-block"
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-porras99/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform inline-block"
          aria-label="LinkedIn"
        >
          <IconLinkedin />
        </a>
      </div>
      <p className="text-xs font-mono text-dark">
        Designed & Built by <span className="text-accent">Kevin Porras</span>
      </p>
      <p className="text-xs text-dark/50 mt-1">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
