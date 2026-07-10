import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/#contact' },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-widest border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-colors min-h-11 inline-flex items-center relative z-[102]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        ref={toggleRef}
        className="md:hidden w-11 h-11 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center relative z-[102]"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="md:hidden absolute top-full left-0 right-0 z-[99] bg-white border-[3px] border-t-0 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
          <nav className="flex flex-col" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm font-semibold uppercase tracking-widest border-b-2 border-black last:border-b-0 hover:bg-black hover:text-white transition-colors min-h-11 flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
