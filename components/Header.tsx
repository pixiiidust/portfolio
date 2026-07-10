import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <header className="border-b-4 border-black">
      {/* Top title bar with wordmark + nav */}
      <div className="flex items-center justify-between p-4 md:p-6 border-b-4 border-black bg-white relative">
        <Link to="/" className="font-pixel text-2xl md:text-3xl uppercase tracking-wider hover:opacity-70 transition-opacity min-h-11 inline-flex items-center relative z-[102]">
          JAMIE SIM
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
