import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';

const CaseStudyIndex: React.FC = () => {
  return (
    <section className="border-b-4 border-black">
      {/* Section header */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <h2 className="font-pixel text-3xl md:text-4xl uppercase tracking-wider font-bold">CASE STUDIES</h2>
      </div>

      {/* Editorial list */}
      <div className="flex flex-col max-w-5xl mx-auto w-full px-6 md:px-12">
        {CASE_STUDIES.map((study, idx) => (
          <React.Fragment key={study.slug}>
            {idx > 0 && <div className="border-t border-gray-300" />}
            <div className="py-6 md:py-8 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <Link
                    to={`/work/${study.slug}`}
                    className="text-lg md:text-xl font-semibold uppercase leading-tight hover:underline min-h-11 inline-flex items-center"
                  >
                    {study.title}
                  </Link>
                  <p className="font-mono text-base mt-2 text-gray-700 leading-relaxed">
                    {study.tagline}
                  </p>
                  <div className="mt-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {study.tech.join(' / ')}
                    </span>
                  </div>
                </div>
                <div className="md:shrink-0">
                  <Link
                    to={`/work/${study.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase hover:underline min-h-11"
                  >
                    [ READ ]
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyIndex;
