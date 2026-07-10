import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import NotFound from './NotFound';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main tabIndex={-1} className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center font-bold uppercase text-sm tracking-wider hover:underline mb-8 no-underline text-black touch-target"
        >
          <ArrowLeft size={16} className="mr-2" /> BACK TO INDEX
        </Link>

        {/* Title */}
        <h1 className="display-lg font-pixel uppercase tracking-wider mb-4">
          {project.title}
        </h1>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-bold border-2 border-black px-2 py-1 uppercase bg-white"
            >
              {t}
            </span>
          ))}
        </div>

        {/* External links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors no-underline text-black touch-target"
              >
                [ {link.label} ] <ExternalLink size={12} className="ml-1" />
              </a>
            ))}
          </div>
        )}

        {/* Reading column content */}
        <div className="reading-column">
          {/* Spotlighted insight */}
          <div className="border-l-4 md:border-l-[6px] border-black bg-gray-100 p-4 md:p-6 mb-8">
            <p className="font-bold text-lg md:text-xl leading-relaxed">
              {project.insight}
            </p>
          </div>

          {/* Problem */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              The Problem
            </h2>
            <p className="text-base leading-relaxed">{project.problem}</p>
          </section>

          {/* Approach */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              The Approach
            </h2>
            <p className="text-base leading-relaxed">{project.approach}</p>
          </section>

          {/* Result */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              The Result
            </h2>
            <p className="text-base leading-relaxed">{project.result}</p>
          </section>

          {/* Reflection */}
          {project.reflection && (
            <section className="mb-8">
              <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
                What I'd Do Differently
              </h2>
              <p className="text-base leading-relaxed italic">{project.reflection}</p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
