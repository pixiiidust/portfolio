import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <main tabIndex={-1} className="min-h-[60vh] px-6 py-16 flex flex-col items-center justify-center text-center">
    <h1 className="font-pixel text-6xl md:text-8xl font-bold mb-4">404</h1>
    <p className="text-base leading-relaxed mb-8">This page does not exist or has moved.</p>
    <Link
      to="/"
      className="inline-flex items-center min-h-11 text-xs font-semibold uppercase tracking-widest hover:underline"
    >
      [ BACK TO INDEX ]
    </Link>
  </main>
);

export default NotFoundPage;
