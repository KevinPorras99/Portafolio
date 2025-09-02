import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClasses = "px-4 py-2 text-sm text-dark dark:text-light hover:text-accent transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-secondary/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'} 
      dark:bg-primary/90 dark:shadow-accent`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold text-accent dark:text-accent">
          KP
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} className={linkClasses} style={{ animationDelay: `${i * 100}ms` }}>
              <span className="text-accent">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-accent dark:text-accent focus:outline-none px-2 py-1 rounded transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              // Icono sol
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} /></svg>
            ) : (
              // Icono luna
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent dark:text-accent focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary dark:bg-primary">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2 text-light dark:text-accent hover:text-accent" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;