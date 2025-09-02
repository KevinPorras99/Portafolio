
import React from 'react';
import { IconGitHub, IconLinkedin } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center animate-fade-in-up">
      <div className="max-w-4xl">
        <p className="text-accent text-lg font-mono mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-4">
          Kevin Porras.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark mb-8">
          I build things for the web and local devices.
        </h2>
        <p className="text-lg max-w-2xl mb-8">
          I'm a software developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm focused on building accessible,
          human-centered products.
        </p>
        <div className="flex items-center space-x-6">
          <a href="mailto:kevinporras9906@gmail.com" className="bg-transparent text-accent border border-accent rounded-md px-8 py-3 hover:bg-accent/10 transition-colors duration-300 font-medium">
            Get In Touch
          </a>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/KevinPorras99" className="text-dark hover:text-accent transition-colors duration-300">
              <IconGitHub />
            </a>
            <a href="https://www.linkedin.com/in/kevin-porras99/" className="text-dark hover:text-accent transition-colors duration-300">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
