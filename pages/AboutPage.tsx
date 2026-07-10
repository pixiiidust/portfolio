import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_PHOTO_URL, BIO_DATA, HOBBIES_DATA } from '../constants';
import { Play } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main tabIndex={-1} className="flex flex-col">
      <div className="p-4 md:p-6 border-b-4 border-black bg-white">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest hover:underline min-h-11"
        >
          [ BACK TO INDEX ]
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-8 md:p-12 border-b-4 border-black bg-white text-center">
        <div className="mb-8 relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] border-[3px] md:border-4 border-black shrink-0 overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <img
            src={PROFILE_PHOTO_URL}
            alt="Jamie Sim"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
        </div>
        <h1 className="text-5xl md:text-8xl font-pixel leading-[0.85] tracking-wide uppercase break-words font-bold">
          JAMIE SIM
        </h1>
      </div>

      <div className="max-w-[720px] mx-auto px-6 md:px-8 py-10 md:py-12 w-full">
        <div className="space-y-6">
          <p className="text-base md:text-lg leading-relaxed">{BIO_DATA.intro}</p>
          <p className="text-base md:text-lg leading-relaxed font-semibold">
            I work from these first principles:
          </p>
          <ul className="space-y-3 list-disc pl-6">
            {BIO_DATA.principles.map((principle) => (
              <li key={principle} className="text-base md:text-lg leading-relaxed">
                {principle}
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg leading-relaxed">{BIO_DATA.closing}</p>
        </div>

        <AboutSection label="Highlights">{BIO_DATA.highlights}</AboutSection>
        <AboutSection label="Current Focus">{BIO_DATA.currentFocus}</AboutSection>
        <AboutSection label="Education">{BIO_DATA.education}</AboutSection>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">
            Hobbies
          </h2>
          <p className="text-base leading-relaxed mb-4">{HOBBIES_DATA.text}</p>
          <a
            href={HOBBIES_DATA.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors min-h-11"
          >
            <Play size={12} className="mr-2 fill-current" /> YOUTUBE
          </a>
        </section>
      </div>
    </main>
  );
};

const AboutSection: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="mt-10">
    <h2 className="text-sm font-semibold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">
      {label}
    </h2>
    <p className="text-base leading-relaxed">{children}</p>
  </section>
);

export default AboutPage;
