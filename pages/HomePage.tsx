import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ProjectIndex from '../components/ProjectIndex';
import CaseStudyIndex from '../components/CaseStudyIndex';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main tabIndex={-1}>
      <Hero />
      <Introduction />
      <ProjectIndex />
      <CaseStudyIndex />
      <Contact />
    </main>
  );
};

export default HomePage;
