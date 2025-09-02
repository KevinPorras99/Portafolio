
import React from 'react';
import type { Skill } from '../types';
import {
  IconTypeScript,
  IconReact,
  IconJs,
  IconTailwindCSS,
  IconPython,
  IconLaravel,
  IconHTML,
  IconCpp,
  IconJava,
  IconSQL
} from './icons';

const skillsData: Skill[] = [
  { name: 'TypeScript', icon: <IconTypeScript /> },
  { name: 'React', icon: <IconReact /> },
  { name: 'JavaScript', icon: <IconJs /> },
  { name: 'Tailwind CSS', icon: <IconTailwindCSS /> },
  { name: 'Python', icon: <IconPython /> },
  { name: 'Laravel', icon: <IconLaravel /> },
  { name: 'HTML', icon: <IconHTML /> },
  { name: 'C++', icon: <IconCpp /> },
  { name: 'Java', icon: <IconJava /> },
  { name: 'SQL', icon: <IconSQL /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg shadow-lg hover:shadow-accent/20 transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-accent mb-3">{skill.icon}</div>
    <span className="text-light font-medium">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center">
        <span className="text-accent font-mono text-2xl mr-4">02.</span> Skills
        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillsData.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
