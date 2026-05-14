import React from 'react';
import type { Experience as ExperienceType } from '../types';

const experienceData: ExperienceType[] = [
  {
    role: 'Full Stack Developer (Intern)',
    company: 'Team Steam S.R.L.',
    period: 'Jul 2024 – Dec 2024',
    description: [
      'Built and maintained Laravel 11 / PHP 8 applications, implementing business logic, MVC architecture, authentication flows, and relational database schemas.',
      'Developed internal dashboards with real-time data visualization and automated Excel-based reporting workflows, reducing manual reporting time significantly.',
      'Collaborated within an Agile team using Azure DevOps Boards and Repos for sprint planning, code review, and CI/CD pipeline management.',
    ],
  },
  {
    role: 'Software Developer — Academic Project',
    company: 'Municipalidad de San Isidro de Heredia',
    period: 'Feb 2023 – Jun 2024',
    description: [
      'Designed and delivered a full-featured Helpdesk system with Laravel, cutting IT incident resolution time by approximately 70%.',
      'Implemented secure role-based access control (RBAC), multi-factor authentication, and automated email/SMS notification pipelines.',
      'Deployed the application on a Linux server, managing environment configuration, database migrations, and ongoing maintenance.',
    ],
  },
];

const ExperienceCard: React.FC<{ job: ExperienceType; index: number }> = ({ job, index }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
    <div className="md:col-span-1 flex md:flex-col md:items-end md:pt-1 gap-3">
      <span className="text-accent font-mono text-xs tracking-widest uppercase">0{index + 1}</span>
      <span className="text-dark font-mono text-xs leading-relaxed">{job.period}</span>
    </div>

    <div className="md:col-span-3 bg-secondary border border-tertiary group-hover:border-accent/30 rounded-lg p-6 transition-colors duration-300">
      <h3 className="text-light font-semibold text-lg leading-snug">
        {job.role}
        <span className="text-accent"> @ {job.company}</span>
      </h3>
      <ul className="mt-4 space-y-2">
        {job.description.map((item, i) => (
          <li key={i} className="flex gap-3 text-dark text-sm leading-relaxed">
            <span className="text-accent mt-1 flex-shrink-0">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center gap-6">
        <span className="text-accent font-mono text-xl">03.</span>
        Where I've Worked
        <span className="h-px bg-tertiary flex-grow"></span>
      </h2>

      <div className="space-y-8">
        {experienceData.map((job, index) => (
          <ExperienceCard key={index} job={job} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
