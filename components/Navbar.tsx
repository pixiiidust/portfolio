import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/#bio', label: 'ABOUT' },
    { to: '/#case-studies', label: 'CASE STUDIES' },
    { to: '/#projects', label: 'AI PROJECTS' },
  ];

  const linkClasses =
    'inline-flex items-center justify-center font-bold tracking-widest uppercase text-sm px-4 py-3 transition-colors hover:bg-black hover:text-white touch-target';

  return (
    <nav
      className="border-b-4 border-black bg-white relative z-[100]"
      aria-label="Main navigation"
    >
      {/* Desktop nav */}
      <div className="hidden lg:flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="font-pixel text-2xl uppercase tracking-wider no-underline text-black"
        >
          Jamie Sim
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClasses}>
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:sjsim@uwaterloo.ca"
            className={linkClasses + ' no-underline text-black'}
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile toggle */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-pixel text-xl uppercase tracking-wider no-underline text-black"
        >
          Jamie Sim
        </Link>
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center border-2 border-black px-3 py-2 font-bold uppercase text-sm tracking-wider bg-white hover:bg-black hover:text-white transition-colors touch-target"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="ml-2">MENU</span>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t-4 border-black bg-white flex flex-col shadow-[0_5px_0_0_rgba(0,0,0,1)]"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b-2 border-black font-bold uppercase text-sm tracking-widest no-underline text-black hover:bg-black hover:text-white transition-colors touch-target"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:sjsim@uwaterloo.ca"
            className="px-6 py-4 border-b-2 border-black font-bold uppercase text-sm tracking-widest no-underline text-black hover:bg-black hover:text-white transition-colors touch-target"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
