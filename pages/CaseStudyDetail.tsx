import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import NotFound from './NotFound';

/** Render the solution field, which may contain markdown-style list items (- prefix) and paragraphs. */
const SolutionRenderer: React.FC<{ content: string }> = ({ content }) => {
  const blocks = content.split('\n\n');
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const lines = block.trim().split('\n').filter(Boolean);
        const listItems = lines.filter((l) => l.trim().startsWith('- '));
        const paragraphs = lines.filter((l) => !l.trim().startsWith('- '));

        return (
          <div key={i}>
            {paragraphs.map((p, j) => (
              <p key={j} className="leading-relaxed mb-2">
                {p}
              </p>
            ))}
            {listItems.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {listItems.map((item, j) => (
                  <li key={j}>{item.replace(/^\s*-\s*/, '')}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    return <NotFound />;
  }

  return (
    <main className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center font-bold uppercase text-sm tracking-wider hover:underline mb-8 no-underline text-black touch-target"
        >
          <ArrowLeft size={16} className="mr-2" /> BACK TO INDEX
        </Link>

        {/* Title with role/status chips */}
        <h1 className="display-lg font-pixel uppercase tracking-wider mb-4">
          {study.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-bold border-2 border-black px-3 py-1 uppercase bg-gray-100">
            {study.role}
          </span>
          <span className="text-xs font-bold border-2 border-black px-3 py-1 uppercase bg-black text-white">
            {study.status}
          </span>
        </div>

        {/* Tech tags and external links */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-bold border-2 border-black px-2 py-1 uppercase bg-white"
            >
              {t}
            </span>
          ))}
        </div>
        {study.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {study.links.map((link, i) => (
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
              {study.insight}
            </p>
          </div>

          {/* Context */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              Context
            </h2>
            <p className="text-base leading-relaxed">{study.context}</p>
          </section>

          {/* Goal */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              Goal
            </h2>
            <p className="text-base leading-relaxed">{study.goal}</p>
          </section>

          {/* Hypothesis */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              Hypothesis
            </h2>
            <p className="text-base leading-relaxed pl-4 border-l-4 border-black bg-gray-50 p-3">
              {study.hypothesis}
            </p>
          </section>

          {/* Problem bullets */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              The Problem
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {study.problem.map((item, i) => (
                <li key={i} className="text-base leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section className="mb-8">
            <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
              The Solution
            </h2>
            <SolutionRenderer content={study.solution} />
          </section>

          {/* Metrics */}
          <section className="mb-8 bg-black text-white p-4 md:p-6 border-2 border-black">
            <h2 className="font-bold uppercase text-sm tracking-widest border-b border-white pb-2 mb-3">
              Measuring Success
            </h2>
            <ul className="space-y-2">
              {study.metrics.map((item, i) => (
                <li key={i} className="flex gap-2 text-base">
                  <span>+</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Risks */}
          {study.risks && study.risks.length > 0 && (
            <section className="mb-8 p-4 md:p-6 border-2 border-black bg-gray-100">
              <h2 className="font-bold uppercase text-sm tracking-widest border-b-2 border-black pb-2 mb-3">
                Risks &amp; Mitigation
              </h2>
              <ul className="space-y-2">
                {study.risks.map((item, i) => (
                  <li key={i} className="flex gap-2 text-base">
                    <span>!</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Reflection */}
          {study.reflection && (
            <section className="mb-8">
              <h2 className="font-bold uppercase text-sm tracking-widest bg-black text-white inline-block px-2 py-1 mb-3">
                What I'd Do Differently
              </h2>
              <p className="text-base leading-relaxed italic">{study.reflection}</p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default CaseStudyDetail;
