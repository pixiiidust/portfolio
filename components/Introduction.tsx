import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_DATA } from '../constants';

const Introduction: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-3 lg:col-span-2 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black p-4 flex items-center justify-center">
        <span className="font-semibold text-lg uppercase tracking-widest text-center">Introduction</span>
      </div>
      <div className="md:col-span-9 lg:col-span-10 p-6 md:p-8 bg-gray-50 flex flex-col justify-center">
        <p className="font-mono text-lg md:text-xl leading-relaxed max-w-4xl">
          {HERO_DATA.introLine}
        </p>
        <div className="mt-6">
          <Link
            to="/about"
            className="inline-flex items-center font-semibold tracking-wider uppercase text-sm hover:underline min-h-11"
          >
            [ ABOUT ME &gt;&gt;&gt; ]
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
