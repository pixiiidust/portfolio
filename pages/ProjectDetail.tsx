import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((candidate) => candidate.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

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

      <article className="max-w-[720px] mx-auto px-6 md:px-8 py-10 md:py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{project.title}</h1>

        <p className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {project.tech.join(' / ')}
        </p>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold uppercase hover:underline min-h-11"
              >
                [ {link.label} ] <ExternalLink size={12} className="ml-1" />
              </a>
            ))}
          </div>
        )}

        <div className="border-l-4 border-black pl-4 md:pl-6 py-2 mb-10 bg-gray-50">
          <p className="text-base md:text-lg leading-relaxed font-semibold">{project.insight}</p>
        </div>

        <Section label="The Problem"><p className="text-base leading-relaxed">{project.problem}</p></Section>
        <Section label="The Approach"><p className="text-base leading-relaxed">{project.approach}</p></Section>
        <Section label="The Result"><p className="text-base leading-relaxed">{project.result}</p></Section>

        {project.reflection && (
          <Section label="What I'd Do Differently">
            <p className="text-base leading-relaxed">{project.reflection}</p>
          </Section>
        )}
      </article>
    </main>
  );
};

const Section: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="mb-8 md:mb-10">
    <h2 className="text-sm font-semibold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">
      {label}
    </h2>
    {children}
  </section>
);

export default ProjectDetail;
