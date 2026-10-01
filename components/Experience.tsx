import type { Experience as ExperienceEntry } from '../types';

const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer · Intern',
    company: 'Team Steam S.R.L.',
    period: 'Jul 2024 – Dec 2024',
    description: [
      'Built and maintained Laravel 11 / PHP 8 applications, including business logic, authentication flows, and relational database schemas.',
      'Automated Excel-based reporting workflows, transforming operational data into validated, structured reports.',
      'Developed internal dashboards with real-time data visualization consuming RESTful APIs.',
      'Collaborated with an Agile team using Azure DevOps Boards and Repos for sprint planning, code review, and CI/CD pipeline management.',
    ],
  },
  {
    role: 'Software Developer · Academic Project',
    company: 'Municipalidad de San Isidro de Heredia',
    period: 'Feb 2023 – Jun 2024',
    description: [
      'Developed Muniticket, a Laravel helpdesk for organizing municipal IT support requests.',
      'Implemented role-based access and notification workflows.',
      'Deployed the application on a Linux server and worked on environment configuration and database migrations.',
    ],
  },
];
export default function Experience() {
  return <section id="experience" tabIndex={-1} className="section" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">04 / Experience</p><h2 id="experience-title">Putting development into practice.</h2></div><a className="button" href="#education">Education ↓</a></div><div className="timeline">{experience.map(job => <article className="timeline-entry" key={job.company}><p className="period">{job.period}</p><div><h3>{job.role}</h3><p className="organization">{job.company}</p><ul>{job.description.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div></section>;
}
