import React from 'react';
import { FOOTER_TAGLINE } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" tabIndex={-1} className="flex flex-col bg-[#f0f0f0] scroll-mt-12">
      <div className="p-4 border-b-4 border-black bg-black text-white">
        <h2 className="font-semibold uppercase tracking-widest text-sm">CONTACT JAMIE</h2>
      </div>

      <div className="p-8 flex flex-col justify-center items-center flex-grow space-y-6">
        <div className="flex gap-6">
          <a
            href="mailto:sjsim@uwaterloo.ca"
            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] min-h-[44px] flex items-center"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jamie-s-6083b6203/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] min-h-[44px] flex items-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/pixiiidust"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] min-h-[44px] flex items-center"
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
  );
};

export default Contact;
