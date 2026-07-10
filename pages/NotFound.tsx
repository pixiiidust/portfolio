import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <main className="p-6 md:p-12 lg:p-16 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="display-xl font-pixel uppercase tracking-wider mb-4">
        404
      </h1>
      <p className="font-mono text-lg md:text-xl mb-2">
        PAGE NOT FOUND
      </p>
      <p className="font-mono text-sm opacity-70 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center font-bold uppercase text-sm tracking-wider border-2 border-black px-6 py-4 hover:bg-black hover:text-white transition-colors touch-target no-underline text-black"
      >
        <ArrowLeft size={16} className="mr-2" /> BACK TO INDEX
      </Link>
    </main>
  );
};

export default NotFound;
