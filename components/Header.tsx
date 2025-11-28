import React, { useState } from 'react';
import { HERO_DATA } from '../constants';
import Modal from './Modal';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <header className="border-b-4 border-black">
      {/* Top Title Bar - Centered Layout */}
      <div className="flex flex-col items-center justify-center p-8 md:p-12 border-b-4 border-black bg-white text-center">
        
        {/* Pixel Icon / Profile Image - Centered and resized to 200px */}
        <div className="mb-8 relative w-[200px] h-[200px] border-4 border-black shrink-0 overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
             <img 
               src="https://github.com/user-attachments/assets/3aa5bbe6-2b5f-488d-948a-39a3f24a0180" 
               alt="Jamie Sim" 
               className="w-full h-full object-cover"
             />
            {/* Pixel Grid Overlay Effect */}
            <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
        </div>

        <div className="w-full max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-pixel leading-[0.85] mb-4 tracking-wide uppercase break-words">
            {HERO_DATA.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase">
            {HERO_DATA.role}
          </h2>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-2 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black p-4 flex items-center justify-center">
            <span className="font-bold text-lg uppercase tracking-widest text-center">Introduction</span>
        </div>
        <div className="md:col-span-10 p-6 md:p-8 bg-gray-50 flex flex-col justify-center">
            <p className="font-mono text-lg md:text-xl leading-relaxed max-w-4xl whitespace-pre-line">
              {HERO_DATA.subHeadline}
            </p>
            <div className="mt-6">
              <Button onClick={() => setIsBioOpen(true)} variant="link">
                [ MEET THE PM &gt;&gt;&gt; ]
              </Button>
            </div>
        </div>
      </div>

      <Modal 
        isOpen={isBioOpen} 
        onClose={() => setIsBioOpen(false)} 
        title="OPERATOR BIO"
      >
        <div className="space-y-8 font-mono">
          <p className="whitespace-pre-line leading-relaxed text-lg">
            {HERO_DATA.bioText}
          </p>
          
          <div className="flex flex-col border-2 border-black">
             {/* Section 1: Highlights (Previously The Numbers) */}
             <div className="p-6 border-b-2 border-black bg-gray-100">
              <h3 className="font-bold bg-black text-white inline-block px-2 py-1 mb-4 uppercase text-sm">Highlights</h3>
              <p>{HERO_DATA.numbers}</p>
            </div>

            {/* Section 2: Current Focus */}
            <div className="p-6 border-b-2 border-black">
              <h3 className="font-bold bg-black text-white inline-block px-2 py-1 mb-4 uppercase text-sm">Current Focus</h3>
              <p>{HERO_DATA.currentFocus}</p>
            </div>

            {/* Section 3: Education */}
            <div className="p-6">
              <h3 className="font-bold bg-black text-white inline-block px-2 py-1 mb-4 uppercase text-sm">Education</h3>
              <p>{HERO_DATA.education}</p>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
