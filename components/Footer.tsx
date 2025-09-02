
import React from 'react';
import { IconGitHub, IconLinkedin } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4 md:hidden">
            <a href="#" className="text-dark hover:text-accent transition-colors duration-300">
                <IconGitHub />
            </a>
            <a href="#" className="text-dark hover:text-accent transition-colors duration-300">
                <IconLinkedin />
            </a>
        </div>
      <p className="text-sm font-mono text-dark">
        Designed & Built by Kevin Porras
      </p>
      <p className="text-xs text-gray-600 mt-1">
        &copy; {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
