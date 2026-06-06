import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--stuck' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">Elementum</a>

        <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav__link" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
