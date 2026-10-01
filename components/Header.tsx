import { useRef, useState } from 'react';

const links = ['Projects', 'About', 'Skills', 'Experience', 'Contact'];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="header-inner">
      <a className="brand" href="#hero" aria-label="Kevin Porras, home">kp<span>.</span></a>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'}</button>
      <nav id="navigation" aria-label="Main navigation" className={open ? 'is-open' : ''}>
        {links.map(label => <a key={label} className={label === 'Contact' ? 'nav-contact' : undefined} href={'#' + label.toLowerCase()} onClick={() => {
          setOpen(false);
          document.getElementById(label.toLowerCase())?.focus({ preventScroll: true });
        }}>{label}</a>)}
      </nav>
    </div>
  </header>;
}
