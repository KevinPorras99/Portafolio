import React from 'react';

const localIcon = (file: string, alt: string, className: string) => (
  <img src={`img/icons/${file}`} alt={alt} className={className} />
);

const deviconUrl = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

// ── Local PNG icons ────────────────────────────────────────────────────────────

export const IconLaravel: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('laravel.png', 'Laravel', className);

export const IconHTML: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('html.png', 'HTML', className);

export const IconCpp: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('c++.png', 'C++', className);

export const IconJava: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('java.png', 'Java', className);

export const IconSQL: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('sql.png', 'SQL', className);

export const IconTypeScript: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('typescript_original_logo_icon_146317.png', 'TypeScript', className);

export const IconJs: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('javascript.png', 'JavaScript', className);

export const IconTailwindCSS: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('tailwind.png', 'Tailwind CSS', className);

export const IconPython: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) =>
  localIcon('python.png', 'Python', className);

// ── Devicon CDN icons ──────────────────────────────────────────────────────────

export const IconReact: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('react/react-original.svg')} alt="React" className={className} />
);

export const IconPHP: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('php/php-plain.svg')} alt="PHP" className={className} />
);

export const IconPostgreSQL: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('postgresql/postgresql-original.svg')} alt="PostgreSQL" className={className} />
);

export const IconBootstrap: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('bootstrap/bootstrap-original.svg')} alt="Bootstrap" className={className} />
);

export const IconMySQL: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('mysql/mysql-original.svg')} alt="MySQL" className={className} />
);

export const IconDocker: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('docker/docker-original.svg')} alt="Docker" className={className} />
);

export const IconSupabase: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('supabase/supabase-original.svg')} alt="Supabase" className={className} />
);

export const IconAzure: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <img src={deviconUrl('azure/azure-original.svg')} alt="Microsoft Azure" className={className} />
);

// ── Inline SVG icons ───────────────────────────────────────────────────────────

export const IconGitHub: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const IconLinkedin: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const IconExternalLink: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);
