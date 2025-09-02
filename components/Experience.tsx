
import React from 'react';
import type { Experience as ExperienceType } from '../types';

const experienceData: ExperienceType[] = [
  {
    role: 'FULL STACK DEVELOPER',
    company: 'TEAM STEAM S.R.L.',
    period: 'JULY 2024 – DECEMBER 2024',
    description: [
      'Designed and implemented the database architecture using MySQL, SQLite, and phpMyAdmin, ensuring efficient and scalable data management.',
      'Developed a role-based authentication and access control system to enhance user interaction security.',
      'Created interactive dashboards with student analytics using PHP, JavaScript, and Bootstrap to improve data visualization.',
      'Implemented Excel import/export functionality for bulk data management.',
      'Conducted local deployment and testing with XAMPP, ensuring system stability before release.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'MUNICIPALIDAD DE SAN ISIDRO DE HEREDIA',
    period: 'FEBRUARY 2023 – JUNE 2024',
    description: [
      'Designed the database schema and relational models in MySQL and SQLite, ensuring structured and efficient ticket management.',
      'Developed dynamic real-time ticket tracking features, improving internal communication and transparency.',
      'Implemented automated email notifications using Laravel’s native services to keep users informed about ticket status.',
      'Created administrative dashboards for ticket assignment, categorization, and resolution by the technical team.',
      'Ensured data integrity and security through authentication and role-based access restrictions.',
      'Conducted testing and deployment in a controlled environment using XAMPP and phpMyAdmin, ensuring stability prior to final implementation.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center">
        <span className="text-accent font-mono text-2xl mr-4">03.</span> Where I've Worked
        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
      </h2>
      <div className="relative border-l-2 border-gray-700 ml-4">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-12 ml-8">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-accent rounded-full -left-2 ring-4 ring-primary"></span>
            <h3 className="text-xl font-semibold text-light">
              {job.role} <span className="text-accent">@ {job.company}</span>
            </h3>
            <p className="text-sm font-mono text-dark mb-4">{job.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
