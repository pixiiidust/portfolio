import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { CASE_STUDIES, PROJECTS } from './constants';

const RouteEffects: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        target?.scrollIntoView({ block: 'start' });
        target?.focus({ preventScroll: true });
        return;
      }

      window.scrollTo({ top: 0, left: 0 });
      document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  React.useEffect(() => {
    const slug = location.pathname.split('/').filter(Boolean).at(-1);
    const item = location.pathname.startsWith('/work/')
      ? CASE_STUDIES.find((study) => study.slug === slug)
      : location.pathname.startsWith('/projects/')
        ? PROJECTS.find((project) => project.slug === slug)
        : undefined;

    document.title = item
      ? `${item.title} | Jamie Sim`
      : location.pathname === '/'
        ? 'Jamie Sim | Product Manager'
        : 'Page Not Found | Jamie Sim';
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <RouteEffects />
      <div
        className="bg-white w-full flex flex-col relative"
        style={{
          borderWidth: 'var(--brut-border)',
          boxShadow: 'var(--brut-shadow) var(--brut-shadow) 0px 0px rgba(0,0,0,0.2)',
        }}
      >
        {/* Decorative corner marker */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-black clip-triangle pointer-events-none z-[101]"></div>

        <Ticker />
        <Navbar />

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Bottom status bar */}
        <div className="border-t-4 border-black p-2 flex justify-between items-center text-xs font-bold uppercase tracking-widest bg-white">
          <span>STATUS: ONLINE</span>
          <span>SYS_VER: 3.0.0</span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
