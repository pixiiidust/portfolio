import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ExternalLink } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((candidate) => candidate.slug === slug);

  if (!study) {
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
        <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-4">
          {study.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <span className="text-xs font-semibold border-2 border-black px-3 py-1 uppercase bg-gray-50">
            {study.role}
          </span>
          <span className="text-xs font-semibold border-2 border-black px-3 py-1 uppercase bg-gray-50">
            {study.status}
          </span>
        </div>

        <p className="mb-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {study.tech.join(' / ')}
        </p>

        {study.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8">
            {study.links.map((link) => (
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
          <p className="text-base md:text-lg leading-relaxed font-semibold">{study.insight}</p>
        </div>

        <Section label="Context"><p className="text-base leading-relaxed">{study.context}</p></Section>
        <Section label="Goal"><p className="text-base leading-relaxed">{study.goal}</p></Section>
        <Section label="Hypothesis"><p className="text-base leading-relaxed">{study.hypothesis}</p></Section>
        <Section label="The Problem">
          <ul className="space-y-3 list-disc pl-6">
            {study.problem.map((item, index) => (
              <li key={`${index}-${item}`} className="text-base leading-relaxed">{item}</li>
            ))}
          </ul>
        </Section>
        <Section label="The Solution"><StructuredText content={study.solution} /></Section>
        <Section label="Measuring Success">
          <div className="border-2 border-black p-4 md:p-6 bg-gray-50">
            <ul className="space-y-3">
              {study.metrics.map((item, index) => (
                <li key={`${index}-${item}`} className="text-base leading-relaxed flex gap-2">
                  <span className="font-semibold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {study.risks && study.risks.length > 0 && (
          <Section label="Risks and Mitigation">
            <ul className="space-y-3 list-disc pl-6">
              {study.risks.map((item, index) => (
                <li key={`${index}-${item}`} className="text-base leading-relaxed">{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {study.reflection && (
          <Section label="What I'd Do Differently">
            <p className="text-base leading-relaxed">{study.reflection}</p>
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

const StructuredText: React.FC<{ content: string }> = ({ content }) => (
  <div className="space-y-4">
    {content.split('\n\n').filter(Boolean).map((block, blockIndex) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
      const isList = lines.every((line) => line.startsWith('- '));

      return isList ? (
        <ul key={blockIndex} className="space-y-3 list-disc pl-6">
          {lines.map((line, lineIndex) => (
            <li key={`${blockIndex}-${lineIndex}`} className="text-base leading-relaxed">
              {line.replace(/^\-\s*/, '')}
            </li>
          ))}
        </ul>
      ) : (
        <div key={blockIndex} className="space-y-3">
          {lines.map((line, lineIndex) => (
            <p key={`${blockIndex}-${lineIndex}`} className="text-base leading-relaxed">{line}</p>
          ))}
        </div>
      );
    })}
  </div>
);

export default CaseStudyDetail;
