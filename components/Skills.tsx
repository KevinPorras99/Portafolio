import React from 'react';
import type { Skill } from '../types';
import {
  IconTypeScript, IconReact, IconJs, IconTailwindCSS, IconHTML,
  IconLaravel, IconPHP, IconPython, IconJava, IconCpp,
  IconMySQL, IconPostgreSQL, IconBootstrap, IconDocker, IconSupabase, IconAzure,
} from './icons';

interface SkillEntry extends Skill {
  category: string;
}

const iconSkills: SkillEntry[] = [
  // Languages
  { name: 'PHP',          icon: <IconPHP />,         category: 'Languages' },
  { name: 'JavaScript',   icon: <IconJs />,           category: 'Languages' },
  { name: 'TypeScript',   icon: <IconTypeScript />,   category: 'Languages' },
  { name: 'Python',       icon: <IconPython />,       category: 'Languages' },
  { name: 'Java',         icon: <IconJava />,         category: 'Languages' },
  { name: 'C++',          icon: <IconCpp />,          category: 'Languages' },
  // Frameworks & UI
  { name: 'Laravel',      icon: <IconLaravel />,      category: 'Frameworks & UI' },
  { name: 'React',        icon: <IconReact />,        category: 'Frameworks & UI' },
  { name: 'Bootstrap',    icon: <IconBootstrap />,    category: 'Frameworks & UI' },
  { name: 'Tailwind CSS', icon: <IconTailwindCSS />,  category: 'Frameworks & UI' },
  { name: 'HTML',         icon: <IconHTML />,          category: 'Frameworks & UI' },
  // Databases
  { name: 'MySQL',        icon: <IconMySQL />,        category: 'Databases' },
  { name: 'PostgreSQL',   icon: <IconPostgreSQL />,   category: 'Databases' },
  // Cloud & BaaS
  { name: 'Supabase',     icon: <IconSupabase />,     category: 'Cloud & BaaS' },
  { name: 'Azure',        icon: <IconAzure />,        category: 'Cloud & BaaS' },
  // DevOps
  { name: 'Docker',       icon: <IconDocker />,       category: 'DevOps & CI/CD' },
];

const pillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Auth & Payments',
    items: ['Clerk Auth', 'Stripe', 'JWT', 'Laravel Sanctum'],
  },
  {
    label: 'Cloud & BaaS',
    items: ['AWS (EC2, RDS)', 'Netlify'],
  },
  {
    label: 'DevOps & CI/CD',
    items: ['GitHub Actions', 'Linux CLI', 'CI/CD Pipelines'],
  },
  {
    label: 'Collaboration',
    items: ['Git', 'GitHub', 'Azure DevOps', 'Trello'],
  },
  {
    label: 'AI Tools',
    items: ['Claude (Anthropic)', 'ChatGPT (OpenAI)', 'Gemini (Google)'],
  },
];

const iconCategories = ['Languages', 'Frameworks & UI', 'Databases', 'Cloud & BaaS', 'DevOps & CI/CD'];

const SkillCard: React.FC<{ skill: SkillEntry }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center gap-3 p-5 bg-secondary rounded-lg border border-tertiary hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group">
    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
      {skill.icon}
    </div>
    <span className="text-dark group-hover:text-light text-xs font-medium text-center transition-colors leading-tight">
      {skill.name}
    </span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center gap-6">
        <span className="text-accent font-mono text-xl">02.</span>
        Skills
        <span className="h-px bg-tertiary flex-grow"></span>
      </h2>

      {/* Icon card grid — grouped by category */}
      <div className="space-y-10 mb-12">
        {iconCategories.map((cat) => {
          const group = iconSkills.filter((s) => s.category === cat);
          if (!group.length) return null;
          return (
            <div key={cat}>
              <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">{cat}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {group.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pill rows — tools, auth, AI */}
      <div className="border-t border-tertiary pt-10 space-y-6">
        {pillGroups.map(({ label, items }) => (
          <div key={label} className="flex flex-wrap items-start gap-x-6 gap-y-3">
            <span className="text-accent font-mono text-xs tracking-widest uppercase w-36 flex-shrink-0 mt-1">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-dark bg-secondary border border-tertiary hover:border-accent/40 hover:text-light rounded px-3 py-1 font-mono transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
