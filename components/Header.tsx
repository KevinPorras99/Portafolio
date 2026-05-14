import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',      label: 'About',      id: 'about'      },
  { href: '#skills',     label: 'Skills',     id: 'skills'     },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#education',  label: 'Education',  id: 'education'  },
  { href: '#projects',   label: 'Projects',   id: 'projects'   },
  { href: '#contact',    label: 'Contact',    id: 'contact'    },
];

const Header: React.FC = () => {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollMid = window.scrollY + window.innerHeight / 3;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && scrollMid >= el.offsetTop && scrollMid < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 shadow-lg backdrop-blur-sm border-b border-tertiary/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold text-accent font-mono tracking-widest select-none">
          KP
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ href, label, id }, i) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-mono transition-colors duration-200 ${
                activeSection === id ? 'text-accent' : 'text-dark hover:text-accent'
              }`}
            >
              <span className="text-accent mr-1">0{i + 1}.</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-accent p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-tertiary/50">
          <nav className="flex flex-col items-center py-6 space-y-3">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                className="text-dark hover:text-accent font-mono text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-accent mr-1">0{i + 1}.</span>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
