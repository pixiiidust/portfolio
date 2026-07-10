import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_DATA, BIO_DATA, CASE_STUDIES, PROJECTS, FOOTER_TAGLINE } from '../constants';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const IndexPage: React.FC = () => {
  const scrollToBio = () => {
    const el = document.getElementById('bio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus();
    }
  };

  return (
    <main tabIndex={-1} className="flex flex-col">
      {/* HERO / INTRODUCTION */}
      <section className="flex flex-col items-center justify-center p-6 md:p-12 border-b-4 border-black bg-white text-center">
        {/* Profile image */}
        <div className="mb-6 md:mb-8 relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-black shrink-0 overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/portfolio/jamie_sim_pfp.jpg"
            alt="Jamie Sim"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
        </div>

        <div className="w-full max-w-4xl">
          <h1 className="display-xl font-pixel tracking-wide uppercase break-words">
            {HERO_DATA.name}
          </h1>
          <p className="mt-4 md:mt-6 font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
            {HERO_DATA.introLine}
          </p>
          <div className="mt-6">
            <button
              onClick={scrollToBio}
              className="inline-flex items-center justify-center font-bold tracking-wider uppercase text-xs px-6 py-4 transition-all active:translate-y-1 bg-transparent border-none hover:underline text-black touch-target"
              aria-label="Scroll to operator bio"
            >
              [ ABOUT ME &gt;&gt;&gt; ]
            </button>
          </div>
        </div>
      </section>

      {/* INLINE OPERATOR BIO */}
      <section
        id="bio"
        tabIndex={-1}
        className="p-6 md:p-10 border-b-4 border-black bg-gray-50 scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto reading-column">
          <h2 className="display-lg font-pixel uppercase tracking-wider mb-6">
            {BIO_DATA.headline}
          </h2>
          {BIO_DATA.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <ul className="list-disc pl-6 space-y-3 mb-4 text-base md:text-lg leading-relaxed">
            {BIO_DATA.principles.map((principle, i) => (
              <li key={i}>{principle}</li>
            ))}
          </ul>
          <p className="text-base md:text-lg leading-relaxed">
            {BIO_DATA.closingParagraph}
          </p>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="case-studies" tabIndex={-1} className="border-b-4 border-black scroll-mt-16">
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <h2 className="display-lg font-pixel uppercase tracking-wider">CASE STUDIES</h2>
          <span className="font-mono text-xs border border-white px-1">01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-black">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className="block p-6 md:p-8 border-b-2 md:border-r-2 border-black hover:bg-gray-100 transition-colors group no-underline text-black"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase leading-tight">
                  {study.title}
                </h3>
                <ArrowRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 group-hover:rotate-0 shrink-0 ml-2"
                />
              </div>
              <p className="font-mono text-sm opacity-70 mt-2 leading-relaxed">
                {study.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold border-2 border-black px-2 py-1 uppercase bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI PROJECTS SECTION */}
      <section id="projects" tabIndex={-1} className="border-b-4 border-black scroll-mt-16">
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <h2 className="display-lg font-pixel uppercase tracking-wider">AI PROJECTS</h2>
          <span className="font-mono text-xs border border-white px-1">02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-black">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block p-6 md:p-8 border-b-2 md:border-r-2 border-black hover:bg-gray-100 transition-colors group no-underline text-black"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg md:text-xl font-bold uppercase leading-tight">
                  {project.title}
                </h3>
                <ArrowRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 group-hover:rotate-0 shrink-0 ml-2"
                />
              </div>
              <p className="font-mono text-sm opacity-70 mt-2 leading-relaxed">
                {project.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold border-2 border-black px-2 py-1 uppercase bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="bg-[#f0f0f0]">
        <div className="p-4 border-b-4 border-black bg-black text-white">
          <h2 className="font-bold uppercase tracking-widest text-sm">CONTACT JAMIE</h2>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center items-center flex-grow space-y-6">
          <div className="flex gap-4 md:gap-6">
            <a
              href="mailto:sjsim@uwaterloo.ca"
              className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] touch-target inline-flex items-center justify-center no-underline text-black"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamie-s-6083b6203/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] touch-target inline-flex items-center justify-center no-underline text-black"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/pixiiidust"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] touch-target inline-flex items-center justify-center no-underline text-black"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="text-[10px] font-mono text-center uppercase tracking-wider opacity-60 mt-4 border-t-2 border-gray-300 pt-4 w-full whitespace-pre-line">
            {FOOTER_TAGLINE}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
