import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_PHOTO_URL, HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 border-b-4 border-black bg-white text-center">
      {/* Profile photo */}
      <div className="mb-8 relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] border-[3px] md:border-4 border-black shrink-0 overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <img
          src={PROFILE_PHOTO_URL}
          alt="Jamie Sim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-pixel leading-[0.85] tracking-wide uppercase break-words font-bold">
          {HERO_DATA.name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
