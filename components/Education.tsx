import React from 'react';

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

const educationData: EducationEntry[] = [
  {
    degree: 'B.S. in Information Systems Engineering',
    institution: 'Universidad Nacional de Costa Rica',
    period: 'Feb 2020 – Dec 2024',
    details: [
      'Focused on software engineering, database systems, distributed architectures, and project management.',
      'Developed the Muniticket Helpdesk system as an academic capstone project in collaboration with a local municipality.',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center gap-6">
        <span className="text-accent font-mono text-xl">04.</span>
        Education
        <span className="h-px bg-tertiary flex-grow"></span>
      </h2>

      <div className="space-y-6">
        {educationData.map((entry, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
            <div className="md:col-span-1 flex md:flex-col md:items-end md:pt-1 gap-3">
              <span className="text-accent font-mono text-xs tracking-widest uppercase">
                0{index + 1}
              </span>
              <span className="text-dark font-mono text-xs leading-relaxed">{entry.period}</span>
            </div>

            <div className="md:col-span-3 bg-secondary border border-tertiary group-hover:border-accent/30 rounded-lg p-6 transition-colors duration-300">
              <h3 className="text-light font-semibold text-lg leading-snug">
                {entry.degree}
              </h3>
              <p className="text-accent font-mono text-sm mt-1">{entry.institution}</p>
              {entry.details && (
                <ul className="mt-4 space-y-2">
                  {entry.details.map((item, i) => (
                    <li key={i} className="flex gap-3 text-dark text-sm leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
