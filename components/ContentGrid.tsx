import React, { useState } from 'react';
import { CASE_STUDIES, PROJECTS, SYSTEM_MESSAGE, HOBBIES_DATA, FOOTER_TAGLINE } from '../constants';
import { CaseStudy } from '../types';
import Button from './ui/Button';
import Modal from './Modal';
import { ExternalLink, ArrowRight, Play, Mail, Linkedin, Github } from 'lucide-react';

const ContentGrid: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // Helper to generate the square grid divider
  const renderDivider = () => (
    <div className="hidden lg:flex flex-col border-r-4 border-black w-12 bg-white shrink-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="h-12 border-b-4 border-black w-full flex items-center justify-center">
             <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col lg:flex-row min-h-[800px] border-b-4 border-black relative">
      
      {/* LEFT COLUMN: CASE STUDIES */}
      <div className="flex-1 flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-black">
        {/* Header Label */}
        <div className="bg-black text-white p-4 flex justify-between items-center">
           <h2 className="font-pixel text-4xl uppercase tracking-wider">CASE STUDIES</h2>
           <span className="font-mono text-xs border border-white px-1">01</span>
        </div>

        {/* Cards Grid - Vertical Stack for Left Col */}
        <div className="flex flex-col h-full bg-white">
            {CASE_STUDIES.map((study, index) => (
                <div 
                  key={study.id} 
                  className={`
                    p-6 md:p-8 flex flex-col group cursor-pointer hover:bg-gray-100 transition-colors
                    ${index !== CASE_STUDIES.length - 1 ? 'border-b-4 border-black' : ''}
                  `}
                  onClick={() => setSelectedStudy(study)}
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl md:text-2xl font-bold uppercase leading-none">{study.title}</h3>
                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 group-hover:rotate-0" />
                    </div>
                    <p className="font-mono text-sm opacity-70 mt-2 line-clamp-3 max-w-md">
                        {study.tagline}
                    </p>
                    <div className="mt-4">
                         <span className="text-xs font-bold border-2 border-black px-2 py-1 uppercase bg-white group-hover:bg-black group-hover:text-white transition-colors">
                            VIEW
                         </span>
                    </div>
                </div>
            ))}
            {/* Fill empty space if needed */}
            <div className="flex-grow bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 min-h-[100px]"></div>
        </div>
      </div>

      {/* CENTER DIVIDER (Visual Zipper) */}
      {renderDivider()}

      {/* RIGHT COLUMN: SIDE PROJECTS & CONTACT */}
      <div className="flex-1 flex flex-col bg-white">
         
         {/* SIDE PROJECTS HEADER */}
         <div className="bg-black text-white p-4 flex justify-between items-center">
           <h2 className="font-pixel text-4xl uppercase tracking-wider">SIDE PROJECTS</h2>
           <span className="font-mono text-xs border border-white px-1">02</span>
        </div>

        <div className="flex flex-col h-full">
            {PROJECTS.map((project, index) => (
                <div 
                  key={project.id} 
                  className="p-6 md:p-8 border-b-4 border-black hover:bg-gray-50 transition-colors"
                >
                    <h3 className="text-xl font-bold uppercase mb-2">{project.title}</h3>
                    <div className="mb-2">
                         <span className="text-xs font-bold bg-gray-200 px-1 py-0.5">TECH: {project.techFocus}</span>
                    </div>
                    <p className="font-mono text-sm mb-4 leading-tight opacity-80 min-h-[2.5em]">
                        {project.description}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase hover:underline"
                    >
                        [ LAUNCH DEMO ] <ExternalLink size={12} className="ml-1"/>
                    </a>
                </div>
            ))}
            
            {/* SYSTEM MESSAGE */}
            <div className="p-4 bg-gray-100 border-b-4 border-black text-center">
                <p className="font-mono text-xs text-gray-500">{SYSTEM_MESSAGE}</p>
            </div>

            {/* HOBBIES SECTION */}
            <div className="p-6 md:p-8 border-b-4 border-black bg-white">
                <h3 className="text-xl font-bold uppercase mb-2">HOBBIES</h3>
                <p className="font-mono text-sm mb-4 leading-tight opacity-80">
                    {HOBBIES_DATA.text}
                </p>
                <a 
                  href={HOBBIES_DATA.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                   <Play size={12} className="mr-2 fill-current"/> YOUTUBE
                </a>
            </div>

            {/* CONTACT BLOCK (Bottom Right) */}
            <div className="mt-auto p-0 flex flex-col bg-[#f0f0f0]">
                <div className="p-4 border-b-4 border-black bg-black text-white">
                     <h2 className="font-bold uppercase tracking-widest text-sm">CONTACT JAMIE</h2>
                </div>
                
                <div className="p-8 flex flex-col justify-center items-center flex-grow space-y-6">
                    <div className="flex gap-6">
                        <a 
                            href="mailto:sjsim@uwaterloo.ca"
                            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jamie-s-6083b6203/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a 
                            href="https://github.com/pixiiidust"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                    </div>
                    
                    <div className="text-[10px] font-mono text-center uppercase tracking-wider opacity-60 mt-4 border-t-2 border-gray-300 pt-4 w-full whitespace-pre-line">
                       {FOOTER_TAGLINE}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* MODAL FOR CASE STUDIES */}
      <Modal
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
        title={selectedStudy?.title || 'FILE'}
      >
        {selectedStudy && (
          <div className="space-y-8 font-mono text-sm md:text-base">
            
            {/* Header Data Grid */}
            <div className="grid grid-cols-2 border-2 border-black bg-gray-50">
              <div className="p-3 border-r-2 border-black">
                <span className="block text-[10px] uppercase font-bold text-gray-500">Role</span>
                <span className="font-bold">{selectedStudy.role}</span>
              </div>
              <div className="p-3">
                <span className="block text-[10px] uppercase font-bold text-gray-500">Status</span>
                <span className="font-bold">{selectedStudy.status}</span>
              </div>
            </div>

            {/* Context & Goal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold uppercase mb-2 bg-black text-white inline-block px-1">Context</h4>
                <p>{selectedStudy.context}</p>
              </div>
              <div>
                <h4 className="font-bold uppercase mb-2 bg-black text-white inline-block px-1">The Goal</h4>
                <p>{selectedStudy.goal}</p>
              </div>
            </div>

            <hr className="border-t-2 border-black border-dashed" />

            {/* Narrative */}
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold mb-2"> &gt;&gt; HYPOTHESIS</h3>
                <p className="pl-4 border-l-4 border-black bg-gray-50 p-2">{selectedStudy.hypothesis}</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <section>
                    <h3 className="text-lg font-bold mb-2"> &gt;&gt; THE PROBLEM</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedStudy.problem.map((item, i) => (
                        <li key={i} className="pl-1 marker:text-black">{item}</li>
                      ))}
                    </ul>
                 </section>

                 <section>
                    <h3 className="text-lg font-bold mb-2"> &gt;&gt; THE SOLUTION</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedStudy.solution.map((item, i) => (
                        <li key={i} className="pl-1 marker:text-black">{item}</li>
                      ))}
                    </ul>
                 </section>
              </div>
              
               <section className="bg-black text-white p-6 border-4 border-black double-border">
                 <h3 className="text-lg font-bold mb-3 uppercase border-b border-white pb-2">
                   Measuring Success
                 </h3>
                 <ul className="space-y-2 font-mono">
                    {selectedStudy.metrics.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>+</span> {item}
                      </li>
                    ))}
                 </ul>
              </section>

              <section className="p-6 border-2 border-black bg-gray-100">
                 <h3 className="text-lg font-bold mb-3 uppercase border-b-2 border-black pb-2">
                   Risks & Mitigation
                 </h3>
                 <ul className="space-y-2 font-mono">
                    {selectedStudy.risks.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>!</span> {item}
                      </li>
                    ))}
                 </ul>
              </section>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default ContentGrid;
